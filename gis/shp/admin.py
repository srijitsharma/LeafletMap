from django.contrib import admin
from .models import Nepal
from leaflet.admin import LeafletGeoAdmin


class nepaladmin (LeafletGeoAdmin):
    list_display = ['first_dist', 'first_dcod', 'area']
    list_filter = ['first_dist']
    list_editable = ['area']


# Register your models here.
admin.site.register(Nepal, nepaladmin)
