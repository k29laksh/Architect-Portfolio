# Generated by Django 5.0.6 on 2024-05-27 16:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='Address',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='project',
            name='Area',
            field=models.CharField(max_length=255),
        ),
    ]