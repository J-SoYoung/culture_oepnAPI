import requests

url = 'http://openapi.seoul.go.kr:8088/6e4957636974686432346a6c614d7a/xml/CardSubwayStatsNew/1/10/클래식/서울'

response = requests.get(url)
print(response.content)
