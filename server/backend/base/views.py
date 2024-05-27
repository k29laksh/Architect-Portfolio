from django.shortcuts import render
from . import serializers
from rest_framework.views import APIView
from rest_framework.response import Response
from . import models
# Create your views here.

class Showall(APIView):
    def get(self,request,pk=None):
        if pk is None:
            projects=models.Project.objects.all()
            serial=serializers.ProjectSerializer(projects,many=True)
        else:
            projects=models.Project.objects.get(p_id=pk)
            serial=serializers.ProjectSerializer(projects)
        return Response(serial.data)


  