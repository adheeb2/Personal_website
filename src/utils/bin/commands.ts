// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' to display summary.
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}. 
Every dev has an origin story. Mine started with broken code and sleepless nights.
I stumbled through frontend, got obsessed with backend.
Now I build backend systems,and I’m knee-deep in NLP and conversational AI.
More about me:
'sumfetch' - short summary.
'readme' - my github readme.`;
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};

export const blog = async (args: string[]): Promise<string> => {
  window.open(`https://hashnode.com/${config.social.blog}/`);

  return 'Opening blog...';
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `You should know that 😉`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `a
bunch
of
fake
directories`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `woah, you still use 'vi'? just try 'emacs'.`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `you know what? just use vscode.`;
};

export const vscode = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
  return `You just got rickrolled `;
};

// Banner
export const banner = (args?: string[]): string => {
  return `
 █████╗ ██████╗ ██╗  ██╗███████╗███████╗██████╗      █████╗ ███╗   ██╗██╗   ██╗ █████╗ ██████╗ 
██╔══██╗██╔══██╗██║  ██║██╔════╝██╔════╝██╔══██╗    ██╔══██╗████╗  ██║██║   ██║██╔══██╗██╔══██╗
███████║██║  ██║███████║█████╗  █████╗  ██████╔╝    ███████║██╔██╗ ██║██║   ██║███████║██████╔╝
██╔══██║██║  ██║██╔══██║██╔══╝  ██╔══╝  ██╔══██╗    ██╔══██║██║╚██╗██║╚██╗ ██╔╝██╔══██║██╔══██╗
██║  ██║██████╔╝██║  ██║███████╗███████╗██████╔╝    ██║  ██║██║ ╚████║ ╚████╔╝ ██║  ██║██║  ██║
╚═╝  ╚═╝╚═════╝ ╚═╝  ╚═╝╚══════╝╚══════╝╚═════╝     ╚═╝  ╚═╝╚═╝  ╚═══╝  ╚═══╝  ╚═╝  ╚═╝╚═╝  ╚═╝
                                                                                               

Type 'help' to see the list of available commands.
Type 'sumfetch' to display summary.
Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for the Github repository.
`;
};
