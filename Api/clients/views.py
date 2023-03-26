from .models import Clients
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import IsAuthenticated
from .serializers import ClientSerializer
from rest_framework import generics


class ClientView(generics.ListCreateAPIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]
    queryset = Clients.objects.all()
    serializer_class = ClientSerializer

    def perform_create(self, serializer):
        serializer.save(user_id=self.request.user.id)

    def get_queryset(self):
        user = self.request.user

        return Clients.objects.filter(user_id=user.id)


class ClientDetailView(generics.RetrieveUpdateDestroyAPIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]
    queryset = Clients.objects.all()
    serializer_class = ClientSerializer
# Create your views here.
