from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from rest_framework.parsers import JSONParser
import jwt
  
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def example_view(request):
    print(jwt.decode('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY2MDY2ODI3LCJpYXQiOjE2NjYwNjMyMjcsImp0aSI6IjY0ZTc2ZDllOTBiMDRjMDM5NTAwZjFhMGQ1ZDI2YjYyIiwidXNlcl9pZCI6NH0.9jU3-E57OHtBYsjBic6a6flcJx5OTn4H3bJnqVUZmLI', key="django-insecure-1gz*2h6p@^(9)^o4%abp6aajmkn$52&&t(!-vf5$=oxgx+73&%", algorithms=['HS256', ], options={"verify_signature": True}))
    content = {'message': 'Hello, GeeksforGeeks'}
    return Response(content)

        