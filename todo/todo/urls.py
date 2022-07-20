from django.urls import path
from . import views

urlpatterns = [
    path('', views.post_list, name='post_list'),
    path('add_note/', views.add_note, name='add_note'),
    path('delete/?P<int:id>/',views.delete,name='delete'),
    path('update/?P<int:id>/',views.update,name='update'),
]