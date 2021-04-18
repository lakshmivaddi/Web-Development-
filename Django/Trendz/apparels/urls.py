from django.urls import path
from . import views

app_name ='apparels'

urlpatterns=[
    path('',views.home,name='home'),
    path('<int:apparels_id>',views.details,name='details')
]