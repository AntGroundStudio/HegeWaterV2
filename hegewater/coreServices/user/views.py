import logging
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from rest_framework import status
from . import models
from rest_framework.parsers import JSONParser
logger = logging.getLogger("loggod")

@csrf_exempt
def test(request):
    if request.method == 'GET':
        try:
            request_data = JSONParser().parse(request)
            #result = models.getUserById(request_data)
            logger.info("Testing Logging")
            return JsonResponse({"result"}, status=status.HTTP_200_OK, safe=False)
        except Exception as e:
            return JsonResponse("Something went wrong", e)

