import { Component, OnInit } from '@angular/core';
import { Post } from '../new-post-form/post-form.model';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PostServiceService } from 'src/app/services/post-service.service';
import { NewPostActionsComponent } from '../new-post-actions/new-post-actions.component';

@Component({
  selector: 'app-update-post-form',
  templateUrl: './update-post-form.component.html',
  styleUrls: ['./update-post-form.component.css']
})
export class UpdatePostFormComponent implements OnInit {

  post: Post = {
    user: "",
    title: "",
    postContent: "",
  }

  constructor(
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<UpdatePostFormComponent>,
    private postService: PostServiceService
  ) { }

  // ngOnInit(): void {
  // }

  // publish() {
  //   this.postService.updatePost(this.post).subscribe(() => {
  //     this.dialog.closeAll();
  //     this.postService.showMessage("Post atualizado!", true);
  //     setTimeout(() => {
  //       window.location.reload();
  //     }, 1000);
  //   })
  // }

  ngOnInit(): void {
    // Recuperar o post selecionado do serviço
    const selectedPost = this.postService.getPost();

    // Preencher os campos do formulário com os dados do post selecionado
    if (selectedPost) {
      this.post = { ...selectedPost }; // Usando spread operator para criar uma cópia
    }
  }

  publish() {
    // Atualize os campos do post selecionado com os novos valores do formulário
    const selectedPost = this.postService.getPost();
    if (selectedPost) {
      selectedPost.user = this.post.user;
      selectedPost.title = this.post.title;
      selectedPost.postContent = this.post.postContent;
  
      // Chame o serviço para atualizar o post no servidor
      this.postService.updatePost(selectedPost).subscribe(
        updatedPost => {
          // Após a atualização bem-sucedida, feche o diálogo e notifique o componente pai (posts.component.ts)
          this.postService.showMessage('Post atualizado com sucesso!');
          this.dialogRef.close('updated');
        },
        error => {
          console.error('Erro ao atualizar o post:', error);
          this.postService.showMessage('Erro ao atualizar o post. Tente novamente.', true);
        }
      );
    } else {
      console.error('Nenhum post selecionado para atualizar.');
      this.postService.showMessage('Erro ao atualizar o post. Tente novamente.', true);
    }
  }
  
  cancel() {
    if (this.post.postContent != "") {
      this.dialog.open(NewPostActionsComponent);
    } else {
      this.dialogRef.close();
    }
  }

}
