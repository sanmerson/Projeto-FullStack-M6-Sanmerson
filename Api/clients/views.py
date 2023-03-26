from .models import Clients
from rest_framework_simplejwt.authentication import JWTAuthentication
from .serializers import ClientSerializer
from rest_framework import generics


class ClientView(generics.ListCreateAPIView):
    queryset = Clients.objects.all()
    serializer_class = ClientSerializer


class ClientDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Clients.objects.all()
    serializer_class = ClientSerializer
# Create your views here.
