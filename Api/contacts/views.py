from .models import Contacts
from .serializers import ContactSerializer
from django.shortcuts import get_object_or_404
from clients.models import Clients
from rest_framework import generics


class ContactListView(generics.ListAPIView):
    queryset = Contacts.objects.all()
    serializer_class = ContactSerializer


class ContactView(generics.ListCreateAPIView):
    queryset = Contacts.objects.all()
    serializer_class = ContactSerializer

    def perform_create(self, serializer):
        serializer.save(client_id = self.kwargs.get("client_id"))


class ContactDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Contacts.objects.all()
    serializer_class = ContactSerializer

    def get_object(self):
        obj = get_object_or_404(Contacts, client_id = self.kwargs.get("client_id"), id = self.kwargs.get("contact_id"))
        return obj
# Create your views here.
