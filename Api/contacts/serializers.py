from rest_framework import serializers
from .models import Contacts


class ContactSerializer(serializers.ModelSerializer):

    def create(self, validated_data: dict) -> Contacts:
        return Contacts.objects.create(**validated_data)

    def update(self, instance: Contacts, validated_data: dict) -> Contacts:
        for key, value in validated_data.items():
            setattr(instance, key, value)

        instance.save()

        return instance

    class Meta:
        model = Contacts
        fields = [
            'id',
            'name',
            'email',
            'phone',
            'description',
            'create_at',
            'update_at',
            'client_id'
        ]
        read_only_fields = ['client_id']
