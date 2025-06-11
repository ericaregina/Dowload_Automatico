const inquirer = require('inquirer');
const axios = require('axios');
const fs = require('fs');
const path = require('path');

const downloadFile = async (url, filePath) => {
  const response = await axios({
    method: 'GET',
    url: url,
    responseType: 'stream',
  });

  return new Promise((resolve, reject) => {
    const writer = fs.createWriteStream(filePath);
    response.data.pipe(writer);
    writer.on('finish', resolve);
    writer.on('error', reject);
  });
};

const main = async () => {
  const { option } = await inquirer.prompt([
    {
      type: 'list',
      name: 'option',
      message: 'Escolha uma opção:',
      choices: [
        'Baixar o pacote do Adobe',
        'Baixar o Office',
        'Baixar ambos',
        'Sair',
      ],
    },
  ]);

  const adobeUrl = 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3a03c852-a9e7-484e-8b29-8ee9bc606dfe.png'; // Substitua pela URL real
  const officeUrl = 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/93f205f3-bd54-4c88-888f-b478e66326ca.png'; // Substitua pela URL real

  switch (option) {
    case 'Baixar o pacote do Adobe':
      console.log('Iniciando download do pacote Adobe...');
      await downloadFile(adobeUrl, path.join(__dirname, 'Adobe_Package.exe'));
      console.log('Pacote do Adobe baixado com sucesso!');
      break;
    case 'Baixar o Office':
      console.log('Iniciando download do pacote Office...');
      await downloadFile(officeUrl, path.join(__dirname, 'Office_Package.exe'));
      console.log('Pacote do Office baixado com sucesso!');
      break;
    case 'Baixar ambos':
      console.log('Iniciando download dos pacotes Adobe e Office...');
      await downloadFile(adobeUrl, path.join(__dirname, 'Adobe_Package.exe'));
      await downloadFile(officeUrl, path.join(__dirname, 'Office_Package.exe'));
      console.log('Pacotes do Adobe e Office baixados com sucesso!');
      break;
    case 'Sair':
      console.log('Saindo...');
      return;
  }

  
  await main();
};

main().catch(err => {
  console.error('Erro:', err);
});
