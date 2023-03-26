from rest_framework import serializers
from .models import Clients


class ClientSerializer(serializers.ModelSerializer):

    def create(self, validated_data: dict) -> Clients:
        return Clients.objects.create(**validated_data)

    def update(self, instance: Clients, validated_data: dict) -> Clients:
        for key, value in validated_data.items():
            setattr(instance, key, value)

        instance.save()

        return instance

    class Meta:
        model = Clients
        fields = [
            'id',
            'name',
            'phone',
            'create_at'
        ]
