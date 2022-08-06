import logging
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from rest_framework import status
from . import models
from rest_framework.parsers import JSONParser
logger = logging.getLogger("loggod")

@csrf_exempt
def test(request):
    if request.method == 'POST':
        logger.info("MethodEntry")
        try:
            request_data = JSONParser().parse(request)
            logger.critical("testing")
            #result = models.addUser(request_data)
            logger.info("MethodExit")
            return JsonResponse("result", status=status.HTTP_200_OK, safe=False)
        except Exception as e:
            return JsonResponse("Something went wrong", e)
        

