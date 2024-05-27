from rest_framework.serializers import ModelSerializer
from . import models

class ProjectFilesSerializer(ModelSerializer):
    class Meta:
        model=models.ProjectFiles
        fields=('images',)

class ProjectSerializer(ModelSerializer):
    files=ProjectFilesSerializer(many=True)
    class Meta:
        model=models.Project
        fields=('p_id','client_name','time','Address','Area','Status','files')