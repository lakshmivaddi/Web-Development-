from django.db import models
from tastypie.resources import ModelResource
from apparels.models import Outfit

class OutfitResource(ModelResource):
    class Meta:
        queryset=Outfit.objects.all()
        resource_name='apparels'
