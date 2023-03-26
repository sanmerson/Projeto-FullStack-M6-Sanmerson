from django.urls import path
from . import views

urlpatterns = [
    path("contacts/", views.ContactListView.as_view()),
    path("contacts/<int:client_id>/", views.ContactView.as_view()),
    path("contacts/<int:client_id>/<int:contact_id>", views.ContactDetailView.as_view()),
]
