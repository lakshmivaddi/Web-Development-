from django.db import models
from django.utils import timezone

class Apparel(models.Model):
    name=models.CharField(max_length=255)
    log_date=models.DateTimeField(default=timezone.now)
    def __str__(self):
        return self.name


class Outfit(models.Model):
    name=models.CharField(max_length=255)
    apparel=models.ForeignKey(Apparel,on_delete=models.CASCADE)
    stock=models.IntegerField(max_length=10)
    orders=models.IntegerField(max_length=10)
    def __str__(self):
        return self.name

