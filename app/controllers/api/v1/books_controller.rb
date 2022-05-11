module Api
  module V1
    class BooksController < ApplicationController


    

    # GET /books
    def index
      @books = Book.all

        render json: @books 

    end

  
    # GET /books#new  
      def new
        @book = Book.new
        
      end
 

    # GET /books/:id
      def show
        # @book = Book.find(params[:id])
        @book = Book.find_by(id: params[:id])

         render json: @book
      end 

    # POST /books
    def create
      @book = Book.new(book_params)

      if @book.save
        render json: @book, status: :created
      else
        render json: @book, status: :unprocessable_entity
      end
    end

    

    # PATCH/PUT /books/1
    def update
      @book = Book.find(params[:id])
      if @book.update(book_params)
            render json: @book
          else
            render json: @book.errors, status: :unprocessable_entity
          end
      
    end

    def edit
      @book = Book.find(params[:id])
      render json: @book
    end

   

    # DELETE /books/1
    def destroy
      @book = Book.find(params[:id]).destroy!
        head :no_content, status: :ok
     
  end

    private
      # Use callbacks to share common setup or constraints between actions.
   
      # Only allow a list of trusted parameters through.
      def book_params
        
          params.require(:book).permit(:id, :title, :genre, :body, :image_url, :author)
      end

 
  end
end
end





