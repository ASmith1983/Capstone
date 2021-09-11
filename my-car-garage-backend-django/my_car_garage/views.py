from django.shortcuts import render
from rest_framework import viewsets
from .serializers import UserSerializer, VehicleSerializer, NoteSerializer
from .models import User, Vehicle, Note

# Create your views here.

class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    
class VehicleView(viewsets.ModelViewSet):
    serializer_class = VehicleSerializer
    queryset = Vehicle.objects.all()
    
class NoteView(viewsets.ModelViewSet):
    serializer_class = NoteSerializer
    queryset = Note.objects.all()