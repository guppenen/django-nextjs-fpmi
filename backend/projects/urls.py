from django.urls import path
from . import views

urlpatterns = [
  path('', views.ProjectListView.as_view()),
  path('<slug:slug>/', views.SingleProjectBySlug.as_view()),
]
