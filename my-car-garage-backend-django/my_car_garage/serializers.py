from django.db import models
from rest_framework import serializers
from .models import User, Vehicle, Note

class UserSerializer(serializers.ModelSerializer):
    
    vehicles = serializers.HyperlinkedRelatedField(
        many=True,
        read_only=True,
        view_name='vehicle-detail'
    )
    
    class Meta:
        model = User
        fields = ('id','name', 'location', 'vehicles')
        

class VehicleSerializer(serializers.ModelSerializer):
    
    services = serializers.HyperlinkedIdentityField(
        many=True,
        read_only=True,
        view_name='note-detail'
    )
    
    class Meta:
        model = Vehicle
        fields = ('user', 'make', 'model', 'year', 'color', 'odometer', 'services')
        
class NoteSerializer(serializers.ModelSerializer):
    
    # services = serializers.HyperlinkedRelatedField(
    #     many=True,
    #     read_only=True,
    #     view_name='vehicle-detail'
    # )
    
    class Meta:
        model = Note
        fields = ('vehicle', 'service', 'notes', 'current_odometer', 'created', 'updated', 'completed')