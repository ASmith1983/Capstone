from django.db import models

# Create your models here.

class User(models.Model):
    name = models.CharField(max_length=100)
    location = models.TextField()
    

    def _str_(self):
        return self.name
    
class Vehicle(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='names')
    make = models.CharField(max_length=50)
    model = models.CharField(max_length=50)
    year = models.CharField(max_length=4, default='2021')
    color = models.CharField(max_length=25)
    odometer = models.IntegerField(default=0)
    

    def _str_(self):
        return self.make
    
    
class Note(models.Model):
    vehicle = models.ForeignKey(Vehicle, on_delete=models.CASCADE, related_name='vehicles')
    service = models.CharField(max_length=100)
    notes = models.TextField()
    current_odometer = models.IntegerField(default=0)
    created = models.DateTimeField(auto_now_add=True)
    updated= models.DateTimeField(auto_now=True)
    completed = models.BooleanField(default=False)

    def _str_(self):
        return self.service