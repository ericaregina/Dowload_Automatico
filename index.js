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

const adobeUrl = 'https://ardownload2.adobe.com/pub/adobe/reader/win/AcrobatDC/2301020163/AcroRdrDC2301020163_en_US.exe';
const officeUrl = 'https://download.microsoft.com/download/2/2/3/2236DBE3-3C6B-47FB-8D3C-2FE2DD6026DF/OfficeDeploymentTool.exe';

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
