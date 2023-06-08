from rest_framework.generics import ListAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions



from .models import Project
from .serializers import ProjectSerializer


class ProjectListView(ListAPIView):
  permission_classes = (permissions.AllowAny, )
  queryset = Project.objects.all()
  serializer_class = ProjectSerializer
  pagination_class = None


class SingleProjectBySlug(APIView):
    permission_classes = (permissions.AllowAny, )
    def get(self, request, *args, **kwargs):
        items = Project.objects.filter(slug=self.kwargs['slug'])
        serializer = ProjectSerializer(items, many=True)
        return Response(serializer.data)
