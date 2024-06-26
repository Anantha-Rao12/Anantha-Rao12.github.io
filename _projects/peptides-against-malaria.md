---
title: "Peptides against Cerebral Malaria (PACMal)"
excerpt: "Insilico modeling and design of Peptide Drugs against Falciparum Cerebral malaria"
collection: projects
date: 2020-12-04
---

The goal of this project was to design peptide inhibitors against the DBLb domain of PF11_0521 PfEMP1 (Plasmodium falciparum Erythrocyte Membrane Protein 1), a membrane protein found on the cell-surface of malaria-infected erythrocytes (red blood cells). The attachment of PfEMP1 with ICAM1 allows infected erytrocytes to cross the blood-brain barrier and deposit clumped erythrocytes in the brain. This results in an advanced stage of Malaria called Cerebral Malaria that is characterised by seizures, coma and severe brain damage. Lennartz et al characterized the interaction of PfEMP1 with Human ICAM1 (Intercellular Adhesion Molecule 1), an endothelial receptor, and reported their findings in this 2017 paper. My work (primarily computational) is based on that and this subsequent 2019 paper.

The computational aspects of the project (related files you can find on this repository) are the following:

![PACMal Workflow](/images/T--IISER-Pune-India--model1.png)

1. A Dynamic RCSB database web-parser that takes in a file containing PDB IDs (4 digit-alphanumeric value) and returns a .csv file containing all required information about each interaction after parsing the worldwide Protein Data Bank. This greatly reduces the time spent on analyzing the details of each structure individually, helps in making quicker decisions, and serves the purpose of a ‘go-to’ database. The python script can he found for the same can be found [here](https://github.com/Anantha-Rao12/Peptides-against-Cerebral-Malaria/tree/master/Preprocessing-data)
    
2. A technique called **Saturated Mutagenesis** was performed (specifically, Computational Saturated Mutagenesis), where we mutate a specific amino-acid residue in a given peptide sequence to all the other 19 natural amino acids and test how this affects the properties of the peptide (in our case, we are interested in the binding affinity). For example, if the given primary sequence was:
            --GALMFWAS--
The objective was to obtain all amino acid sequences that differ from the given sequence by only 1 amino acid (AALMFWAS, CALMFWAS ... etc) .This involves replacing each residue by every other natural amino acid. I wrote a Python+Bash script that worked on top of Chimera (an open-source molecular visualization software with loads of plugins!), for the same. The exact script is available [here](https://github.com/Anantha-Rao12/Peptides-against-Cerebral-Malaria/blob/master/Preprocessing-data/preprocessing-functions.py)
                    
3.  Following Step2, each mutant was scored [foldx](http://foldxsuite.crg.eu/) (another great Bioinforamtics tool!). This was performed with a bash script which can be found [here](https://github.com/Anantha-Rao12/Peptides-against-Cerebral-Malaria/tree/master/SM-and-scoring-analysis/Param-scripts).
                        
4. Molecular Dynamics simulations and analysis (for finer, course-grain details) of their results consumed a large portion of the project timeline. Simulations were performed on Parambrahma Supercomputing facility (Supercomputer at IISER Pune) using GROMACS5. The analysis primarily involved:
                            
    1. Understanding how the peptide inhibitor moved relative to the Protein. For this we calculated how the distance between the centroids of the two entities changed over time. I build PDB_centroid_analyser (A script that uses the regex engine) to output the centroid of a .pdb file. Again all details about code and documentation is available on the project repository. 
                                    
    2. We wished to understand how (if any) non-covalent interactions influenced the stability of the Protein-peptide interaction and quantify it. For this, I wrote a script that computes the hydrogen-bond profile of an interaction. Files can be found here.
                                            
    3. We used MD data to understand the binding of the inhibitor to the Protein (check how the centroid of the peptides and Proteins evolve over time) and quantify the Hydrogen Bond retention between the Protein and the peptide.
                                                    
    4. As a part of the iGEM 2020 team, we planned to deliver the drug using a cyclotide (a cyclic peptide with 3 strong intramolecular cysteine bonds). So I grafted my peptide of interest into cyclotide Kalata B1 and then further assessed its stability.
                                                            
I hope that the scripts I wrote will benefit someone who is trying to solve a similar problem. Although not the perfect solution, I hope these scripts can give you an idea of how to approach the problem. If you found something helpful, do let me know! Consider starring the repository, creating an issue or just drop a message !
 
 The repository `Anantha-Rao12/Peptides-against-Cerebral-Malaria` contains files, scripts, and summaries that were a part of my summer-cum-fall semester project at IISER Pune in 2020. The project is interdisciplinary in nature and borrows ideas from the fields of structural biology, computational biophysics, and computational chemistry. This project is a part of the iGEM IISER Pune 2020 Team Project where a group of second-third year undergraduates worked on tackling the problem of malaria from every aspect (experiments, human practices, creating social awareness etc). More details about our team-project is available on the igem website : [igem-IISER-Pune-2020](https://2020.igem.org/Team:IISER-Pune-India)
 
Have a good day!
