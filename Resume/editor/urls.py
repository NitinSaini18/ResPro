from django.urls import path,include
from . import views
app_name='editor'

urlpatterns = [
    path('edit_template1/', views.edit_template1, name = 'template1'),
    path('edit_template2/', views.edit_template2, name = 'template2'),
    path('edit_template3/', views.edit_template3, name = 'template3'),
    path('edit_template4/', views.edit_template4, name = 'template4'),
]

