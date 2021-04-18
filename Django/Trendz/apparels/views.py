from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from .models import Outfit

def home(request):
    home =Outfit.objects.all()
    return render(request,'apparels/home.html',{'homes':home})

def details(request,apparels_id):
    #details=Outfit.objects.get(id=apparels_id)
    details = get_object_or_404(Outfit,id=apparels_id)
    #return HttpResponse(apparels_id)
    return render(request,'apparels/details.html',{'details':details})

# <td><a href="/apparels/{{ h.id }}">{{ h.name }}</a></td>
       #   <!-- <td><a href="{% url 'apparels_details' h.id %}">{{ h.name }}</a></td> -->
