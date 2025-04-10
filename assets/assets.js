import user_image from './github-profile.jpg';
import code_icon from './code-icon.svg';
import code_icon_dark from './code-icon-dark.svg';
import edu_icon from './edu-icon.svg';
import edu_icon_dark from './edu-icon-dark.svg';
import framework_icon from './framework-icon.svg';
import framework_icon_dark from './framework-icon-dark.svg';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import web_icon from './web.svg';
import lock_icon from './lock.svg';
import db_icon from './database.svg';
import ui_icon from './design.svg';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    framework_icon,
    framework_icon_dark,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    web_icon,
    lock_icon,
    ui_icon,
    db_icon
};

export const workData = [
    {
        title: 'Site de Bicicletas Elétricas',
        description: 'Aplicação Web',
        bgImage: './public/bikcraft.JPG',
    },
    {
        title: 'Buscador de CEP',
        description: 'Aplicação Web',
        bgImage: './public/buscador-cep.JPG',
    },
    {
        title: 'Github Search',
        description: 'Aplicação Web',
        bgImage: './public/git-search.JPG',
    },
    {
        title: 'Lista de Tarefas',
        description: 'Aplicação Web',
        bgImage: './public/vue-todolist.jpg',
    },
]

export const serviceData = [
    { icon: assets.web_icon, title: 'Desenvolvimento Web', description: 'Desenvolvedor Fullstack com experiências em React, Angular e Spring Framework', link: '' },
    { icon: assets.lock_icon, title: 'Segurança', description: 'Conceitos e boas práticas com criptografia e desenvolvimento seguro', link: '' },
    { icon: assets.db_icon, title: 'Banco de Dados', description: 'MySQL e PostgreSQL', link: '' },
    { icon: assets.ui_icon, title: 'UI/UX Design', description: 'Design intuitivo e focado na experiência do usuário', link: '' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Linguagens de Programação', description: 'HTML, CSS, JavaScript, Java e Python' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Educação', description: 'Tecnólogo em Análise e Desenvolvimento de Sistemas' },
    { icon: assets.framework_icon, iconDark: assets.framework_icon_dark, title: 'Frameworks', description: 'ReactJS, NextJS, Angular e Spring' }
];