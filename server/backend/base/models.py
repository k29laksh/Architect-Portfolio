from django.db import models
from uuid import uuid4
# Create your models here.
class Category(models.Model):
    name=models.CharField(max_length=255)
    def __str__(self):
        return self.name
class Project(models.Model):
    p_id=models.UUIDField(default=uuid4)
    client_name=models.CharField(max_length=255)
    time=models.DurationField()
    Address=models.CharField(max_length=255)
    Area=models.CharField(max_length=255)
    Status=models.CharField(max_length=255)
    category=models.ForeignKey(Category,on_delete=models.SET_NULL,null=True)

    def __str__(self):
        return self.client_name

class ProjectFiles(models.Model):
    project=models.ForeignKey(Project,on_delete=models.CASCADE,related_name='files')
    images=models.FileField(upload_to='Project_Files')

    def __str__(self):
        return self.project.client_name