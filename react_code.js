import React, { useState } from 'react';

const ImageUpload = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('image', image);

      // Отправка изображения на сервер
      const response = await fetch('http://ваш_сервер/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Изображение успешно загружено на сервер');
      } else {
        console.error('Ошибка при загрузке изображения');
      }
    } catch (error) {
      console.error('Ошибка:', error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleUpload}>Загрузить изображение</button>
    </div>
  );
};

export default ImageUpload;
