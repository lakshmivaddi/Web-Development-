from django.db import models
from django.utils import timezone


class Todo(models.Model):
    added_date = models.DateTimeField()
    text = models.CharField(max_length = 255)
