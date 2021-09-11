from django.contrib import admin
from .models import User, Vehicle, Note

# class UserAdmin(admin.ModelAdmin):
#     list_display = ('name')
    
    
# Register your models here.
admin.site.register(User)
admin.site.register(Vehicle)
admin.site.register(Note)
# admin.site.register(User, UserAdmin)
# admin.site.register(Vehicle, UserAdmin)
# admin.site.register(Notes, UserAdmin)