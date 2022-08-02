from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse

@csrf_exempt
def test(request):
    if request.method == 'GET':
        return JsonResponse({"id":1,"first_name":"Carree","last_name":"Twentyman","email":"ctwentyman0@youtube.com","gender":"Female","ip_address":"192.3.158.21"},safe=False)

