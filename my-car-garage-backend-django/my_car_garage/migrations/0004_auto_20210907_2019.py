# Generated by Django 3.2.7 on 2021-09-07 20:19

from django.db import migrations

def seed(apps, schema_editor):
    User = apps.get_model('my_car_garage', 'User')
    Vehicle = apps.get_model('my_car_garage', 'Vehile')
    


class Migration(migrations.Migration):

    dependencies = [
        ('my_car_garage', '0003_alter_vehicle_user'),
    ]

    operations = [
    ]
