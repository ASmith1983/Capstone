# Generated by Django 3.2.7 on 2021-09-07 20:51

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('my_car_garage', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='vehicle',
            name='user',
            field=models.ForeignKey(default='', on_delete=django.db.models.deletion.CASCADE, related_name='vehicles', to='my_car_garage.user'),
            preserve_default=False,
        ),
    ]
