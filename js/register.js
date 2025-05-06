const aplicarEstilos = (elemento, estilos) => {
    Object.assign(elemento.style, estilos);
  };
  
  const guardarImagen = (url, descripcion) => {
    const datos = localStorage.getItem('imagenes');
    const imagenes = datos ? JSON.parse(datos) : [];
    imagenes.push({ url, descripcion });
    localStorage.setItem('imagenes', JSON.stringify(imagenes));
  };
  
  const renderFormulario = () => {
    document.body.innerHTML = '';
    aplicarEstilos(document.body, {
      margin: '0',
      fontFamily: 'sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    });
  
    const header = document.createElement('header');
    header.textContent = 'Registrar Nueva Imagen';
    aplicarEstilos(header, {
      background: '#444',
      color: 'white',
      textAlign: 'center',
      width: '100%',
      padding: '1em',
    });
  
    const main = document.createElement('main');
    aplicarEstilos(main, {
      padding: '2em',
      width: '100%',
      maxWidth: '600px',
    });
  
    const form = document.createElement('form');
    aplicarEstilos(form, {
      display: 'flex',
      flexDirection: 'column',
      gap: '1em',
    });
  
    const inputUrl = document.createElement('input');
    inputUrl.type = 'url';
    inputUrl.placeholder = 'URL de la imagen';
    inputUrl.required = true;
    aplicarEstilos(inputUrl, {
      padding: '0.5em',
      fontSize: '1em',
    });
  
    const inputDesc = document.createElement('input');
    inputDesc.type = 'text';
    inputDesc.placeholder = 'Descripción';
    inputDesc.required = true;
    aplicarEstilos(inputDesc, {
      padding: '0.5em',
      fontSize: '1em',
    });
  
    const btnGuardar = document.createElement('button');
    btnGuardar.type = 'submit';
    btnGuardar.textContent = 'Guardar';
    aplicarEstilos(btnGuardar, {
      padding: '0.5em',
      fontSize: '1em',
      cursor: 'pointer',
    });
  
    form.onsubmit = (e) => {
      e.preventDefault();
      const url = inputUrl.value.trim();
      const desc = inputDesc.value.trim();
  
      if (!url) return alert('URL obligatoria');
      if (desc.length < 3) return alert('Descripción muy corta');
  
      guardarImagen(url, desc);
      location.href = 'index.html';
    };
  
    form.appendChild(inputUrl);
    form.appendChild(inputDesc);
    form.appendChild(btnGuardar);
    main.appendChild(form);
  
    const footer = document.createElement('footer');
    footer.textContent = 'Programación Integrativa de Componentes - Josue Zambrano';
    aplicarEstilos(footer, {
      background: '#444',
      color: 'white',
      textAlign: 'center',
      width: '100%',
      padding: '1em',
    });
  
    document.body.appendChild(header);
    document.body.appendChild(main);
    document.body.appendChild(footer);
  };
  
  renderFormulario();
  