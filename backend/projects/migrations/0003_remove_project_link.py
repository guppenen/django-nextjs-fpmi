# Generated by Django 4.0.6 on 2023-06-06 09:57

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0002_project_slug'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='project',
            name='link',
        ),
    ]
