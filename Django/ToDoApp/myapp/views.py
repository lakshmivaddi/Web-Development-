from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.views.decorators.csrf import csrf_exempt
from django.utils import timezone
from . models import Todo

def home(request):
    list_of_todo = Todo.objects.all().order_by("-added_date")
    return render(request, 'myapp/index.html', {'list_of_todo': list_of_todo})

#@csrf_exempt
def add_todo(request):
    #print(request.POST)
   # list_of_todo = Todo.objects.all()
    current_date = timezone.now()
    content = request.POST["content"]
    created_obj = Todo.objects.create(added_date = current_date, text = content)
    #print(added_date)
    #print(content)
    #print(created_obj.text)
    #print(created_obj.id)
    #length_of_todo = Todo.objects.all().count()
    #print(created_obj.added_date)
    #return render(request, 'myapp/index.html', {'list_of_todo': list_of_todo})
    return HttpResponseRedirect('/')


def delete_todo(request, todo_id):
    Todo.objects.get(id = todo_id).delete()
    print(todo_id)
    return HttpResponseRedirect('/')


