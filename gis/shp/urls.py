from django.urls import path
from .views import index, nepal

urlpatterns = [
    path('', index, name='index'),
    path('nepaldata', nepal, name='mynepaldata'),
]
