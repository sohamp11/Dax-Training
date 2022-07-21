from hashlib import new
from django.shortcuts import redirect, render
from .models import Post
from django.contrib.auth.models import User
#from django.http import HttpResponseRedirect 

def post_list(request):
    todos = Post.objects.all()
    return render(request, 'todo/post_list.html', {'todos': todos})

def add_note(request):
    note = Post()
    note.note_title = request.POST.get('title')
    user = User.objects.get(username="spatil")
    note.author = user
    #print(user)
    note.details=request.POST.get('details')
    note.save()
    return redirect(post_list)

def delete(request,id):
    Post.objects.filter(id=id).delete()
    return redirect(post_list)

def update(request,id):
    
    if request.method == 'POST':
        db= Post()
        db.id=id
        db.note_title = request.POST.get('title')
        db.details = request.POST.get('details')
        db.save()
        return redirect(post_list)

    notes = Post.objects.filter(id = id)
    return render(request,'todo/update.html',{'title':notes[0].note_title,'details':notes[0].details})
