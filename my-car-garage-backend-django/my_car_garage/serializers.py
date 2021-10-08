from django.db import models
from rest_framework import serializers
from .models import User, Vehicle, Note

class NoteSerializer(serializers.ModelSerializer):
    note_links = serializers.HyperlinkedIdentityField(view_name="note-detail")
    # users = UserSerializer(
    #     many=True,
    #     read_only=True,
    # )
    
    class Meta:
        model = Note
        fields = ('id','vehicle', 'vehicle_id','service', 'notes', 'current_odometer', 'created', 'updated', 'completed','note_links')

class VehicleSerializer(serializers.ModelSerializer):
    
    services = NoteSerializer(
        many=True,
        
        
    )
    
    class Meta:
        model = Vehicle
        fields = ('id','user_id','user', 'make', 'model', 'year', 'color', 'odometer', 'services')
        
        
class UserSerializer(serializers.ModelSerializer):
    
    vehicle_links = serializers.HyperlinkedIdentityField(view_name="vehicle-detail")
    
    
    vehicles = VehicleSerializer(
        many=True,
        read_only=True,
       
    )
    
    class Meta:
        model = User
        fields = ('id','name', 'location', 'vehicles','vehicle_links')
        

        