from django.conf.urls import patterns, include, url
from tastypie.api import Api

from .views.api.user_resource import UserResource
from .views.home import HomeView

urlpatterns = []

#
# Api
#
api = Api(api_name=u"v1")
api.register(UserResource())
urlpatterns += patterns('', (r'^api/', include(api.urls)))

#
# Default.
#
urlpatterns += patterns(
    '',
    url(r'^.*$', HomeView.as_view(), name='home-alias')
)
