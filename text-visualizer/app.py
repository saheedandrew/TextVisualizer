from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
from google.cloud import language_v1
from google.cloud.language_v1 import enums
import os 
import urllib.request
from googleapiclient.discovery import build
import pprint
import json

app = Flask(__name__)
CORS(app)

cred_path = 'VVL-cred.json'
os.environ['GOOGLE_APPLICATION_CREDENTIALS']=cred_path
cse_key = 'AIzaSyBXzuFDyYMqSvS03eUZPHZVxMgEy0yoy1s'
cse_id = '013734782443617352104:k92eecqi7id'

@app.route('/_analyze', methods=['POST'])
def _analyze():
    string = str(request.get_data())
    string = string[2:-1]
    response = {
        'sentences' : []
    }

    strings = string.split('.')
    
    for string in strings:
        links, keywords = analyze_entry(string)
        
        response['sentences'].append({
            'sentence' : string,
            'keywords' : keywords,
            'links' : links
        })
    print(response)
    return jsonify(response)

def google_search(search_term, api_key, cse_id, **kwargs):
    service = build("customsearch", "v1", developerKey=api_key)
    res = service.cse().list(q=search_term, cx=cse_id, **kwargs).execute()
    return res['items']

def analyze_entry(text_content):
    """
    Analyze the contents of a string and return important keywords
    """

    client = language_v1.LanguageServiceClient()

    type_ = enums.Document.Type.PLAIN_TEXT

    language = 'en'
    document = {'content': text_content, 'type': type_, 'language': language}

    encoding_type = enums.EncodingType.UTF8

    response = client.analyze_entities(document, encoding_type=encoding_type)

    link = []
    keywords = []

    for entity in response.entities:
        if (enums.Entity.Type(entity.type).name != 'OTHER'  and 
           enums.Entity.Type(entity.type).name != 'NUMBER'  and
           enums.Entity.Type(entity.type).name != 'PRICE'   and
           enums.Entity.Type(entity.type).name != 'ADDRESS' and
           enums.Entity.Type(entity.type).name != 'LOCATION'):
            print(u'Representative name for the entity: {}'.format(entity.name))
            keywords.append(entity.name)
            image = google_search(entity.name, cse_key, cse_id, num=1, searchType='image')
            print(image[0]['link'])
            link.append(image[0]['link'])
    return link, keywords