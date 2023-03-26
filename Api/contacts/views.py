from .models import Contacts
from .serializers import ContactSerializer
from django.shortcuts import get_object_or_404
from rest_framework import generics
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import IsAuthenticated


class ContactListView(generics.ListAPIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]
    queryset = Contacts.objects.all()
    serializer_class = ContactSerializer


class ContactView(generics.ListCreateAPIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]
    queryset = Contacts.objects.all()
    serializer_class = ContactSerializer

    def perform_create(self, serializer):
        serializer.save(client_id=self.kwargs.get("client_id"))


class ContactDetailView(generics.RetrieveUpdateDestroyAPIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]
    queryset = Contacts.objects.all()
    serializer_class = ContactSerializer

    def get_object(self):
        obj = get_object_or_404(Contacts, client_id = self.kwargs.get("client_id"), id = self.kwargs.get("contact_id"))
        return obj

