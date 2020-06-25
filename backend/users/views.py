from django.shortcuts import render
from django.http import HttpResponse
from django.core import serializers
from .models import User

# Create your views here.
def index(request):
    users = serializers.serialize("json", User.objects.all())
    return HttpResponse(users)

def create(request):
    if request.method == "POST":
        name = request.POST["name"]
        email = request.POST["email"]
        phone = request.POST["phone"]
        new_user = User(name=name, email=email, phone=phone)
        new_user.save()
