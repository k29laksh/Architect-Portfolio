from django.urls import path
from . import views
urlpatterns = [
    path('showpost/',views.Showall.as_view(),name='allpost'),
    path('showpost/<uuid:pk>',views.Showall.as_view(),name='allpost'),
]

