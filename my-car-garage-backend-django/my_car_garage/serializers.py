from rest_framework import serializers
from .models import User, Vehicle, Note

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('name', 'location')

class VehicleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vehicle
        fields = ('user', 'make', 'model', 'year', 'color', 'odometer')
        
class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = ('vehicle', 'service', 'notes', 'current_odometer', 'created', 'updated', 'completed')