# from django.shortcuts import render
# from django.http import HttpResponse
# from django.core import serializers
from .models import User
from .serializers import *
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

# Create your views here.
@api_view(["GET"])
def index(request):
    if request.method == "GET":
        data = User.objects.all()
        serializer = UserSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)
@api_view(["POST"])
def create(request):
    if request.method == "POST":
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
